import React from "react";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";
import { TweetButton } from "./TweetButton";

test('tweet button renders correctly', () => {
  console.log('test')
  render(<TweetButton />);
});