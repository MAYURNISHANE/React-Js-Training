import React, { useEffect, useRef, useState } from "react";

const Input = () => {
  // useRef__start 
  const searchRef = useRef();
  const [nameError, setNameError] = useState();
  const SearchUserName = () => {
    if (searchRef.current.value === '') {
      searchRef.current.style.border = '4px solid red';
      setNameError('Please Enter User Name !')
    }
    else {
      searchRef.current.style.border = '3px solid black';
      setNameError()
    }
  }
  // useRef__End
  const [InputValue, setInputValue] = useState("");
  const [InputResult, setInputResult] = useState();
  const [showSearchUsers, setShowSearchUsers] = useState(false);
  useEffect(() => {
    if (InputValue.length > 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => {
          var filteredResult = result.filter((item) =>
            item.name.includes(InputValue)
          );
          setInputResult(filteredResult);
        });
    }
    else if (InputValue.length == 0) {
      setShowSearchUsers(false)
      setInputResult()
    }
  }, [InputValue]);
  return (
    <div>
      <input type="search" ref={searchRef} value={InputValue} placeholder="Search User by Name" onChange={(event) => { setInputValue(event.target.value); setShowSearchUsers(true) }} />
      {showSearchUsers && <div className="search-name">
        {InputResult?.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
      }
      <div onClick={SearchUserName}> <i class="fa-solid fa-magnifying-glass search"></i> </div>
      <div className="error-msg">{nameError}</div>
    </div>
  );
};

export default Input;
