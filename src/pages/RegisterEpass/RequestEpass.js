import React from "react";

function RequestEpass() {
  return (
    <div>
      <form action="">
        <label htmlFor="">email</label>
        <input type="text" name="email" id="email" />

        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="">Phone no</label>
        <input type="text" name="phone" id="phone" />

        <select name="" id="">
          <option value=""></option>
        </select>

        <select name="" id="">
          <option value=""></option>
        </select>

        <select name="" id="">
          <option value=""></option>
        </select>

        <select name="" id="">
          <option value=""></option>
        </select>

        <label htmlFor="">Enter Reason</label>
        <input type="text" name="reason" id="reason" />

        <label htmlFor="">Enter Reason</label>
        <input type="text" name="additionalInfo" id="reason" />
      </form>
    </div>
  );
}

export default RequestEpass;
