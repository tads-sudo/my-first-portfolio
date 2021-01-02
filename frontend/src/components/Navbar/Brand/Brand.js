import React from "react";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";

export const Brand = () => {
  const classes = useStyles();

  return (
    <NavLink to="/about">
      <svg
        className={classes.svg}
        viewBox="0 0 86 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4688 31.875H20.5V35H13.4688C11.9583 35 10.6693 34.4661 9.60156 33.3984C8.53385 32.3307 8 31.0417 8 29.5312C8 28.0208 8.53385 26.7318 9.60156 25.6641C10.6693 24.5964 11.9583 24.0625 13.4688 24.0625H22.0625L18.9375 27.1875H13.4688C12.8229 27.1875 12.2708 27.4167 11.8125 27.875C11.3542 28.3333 11.125 28.8854 11.125 29.5312C11.125 30.1771 11.3542 30.7292 11.8125 31.1875C12.2708 31.6458 12.8229 31.875 13.4688 31.875ZM27.39 35C25.8796 35 24.5905 34.4661 23.5228 33.3984C22.4551 32.3307 21.9213 31.0417 21.9213 29.5312C21.9213 28.0208 22.4551 26.7318 23.5228 25.6641C24.5905 24.5964 25.8796 24.0625 27.39 24.0625H28.9525C30.4629 24.0625 31.752 24.5964 32.8197 25.6641C33.8874 26.7318 34.4213 28.0208 34.4213 29.5312C34.4213 31.0417 33.8874 32.3307 32.8197 33.3984C31.752 34.4661 30.4629 35 28.9525 35H27.39ZM27.39 27.1875C26.7442 27.1875 26.1921 27.4167 25.7338 27.875C25.2754 28.3333 25.0463 28.8854 25.0463 29.5312C25.0463 30.1771 25.2754 30.7292 25.7338 31.1875C26.1921 31.6458 26.7442 31.875 27.39 31.875H28.9525C29.5983 31.875 30.1504 31.6458 30.6088 31.1875C31.0671 30.7292 31.2963 30.1771 31.2963 29.5312C31.2963 28.8854 31.0671 28.3333 30.6088 27.875C30.1504 27.4167 29.5983 27.1875 28.9525 27.1875H27.39ZM42.8738 35H42.4831L39.3581 31.875H42.8738C43.5196 31.875 44.0717 31.6458 44.53 31.1875C44.9883 30.7292 45.2175 30.1771 45.2175 29.5312C45.2175 28.8854 44.9883 28.3333 44.53 27.875C44.0717 27.4167 43.5196 27.1875 42.8738 27.1875H38.9675V36.1719L35.8425 33.0469V24.0625H42.8738C44.3842 24.0625 45.6732 24.5964 46.7409 25.6641C47.8086 26.7318 48.3425 28.0208 48.3425 29.5312C48.3425 31.0417 47.8086 32.3307 46.7409 33.3984C45.6732 34.4661 44.3842 35 42.8738 35ZM52.8887 31.875H62.2637V35H49.7637V24.0625H63.8262L60.7012 27.1875H52.8887V27.9688H60.7012V31.0938H52.8887V31.875ZM72.6694 24.0625C73.6381 24.0625 74.4663 24.4062 75.1538 25.0938C75.8413 25.7812 76.185 26.6094 76.185 27.5781C76.185 28.5469 75.8413 29.375 75.1538 30.0625C74.7631 30.4531 74.3256 30.7318 73.8413 30.8984L77.9428 35H73.5209L66.81 28.2891V36.1719L63.685 33.0469V24.0625H72.6694ZM66.81 27.1875V27.9688H72.6694C72.7788 27.9688 72.8699 27.9323 72.9428 27.8594C73.0209 27.7812 73.06 27.6875 73.06 27.5781C73.06 27.4688 73.0209 27.3776 72.9428 27.3047C72.8699 27.2266 72.7788 27.1875 72.6694 27.1875H66.81Z"
          fill="#F9FAF7"
        />
      </svg>
    </NavLink>
  );
};