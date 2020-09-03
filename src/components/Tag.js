import React, { useState, useContext } from "react";
import styled from "styled-components";
const Tag = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" value="value" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Tag;
