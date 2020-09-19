export const asyncSelectStyles = {
  control: (base: any, state: { isFocused: any }) => ({
    ...base,
    background: "#f5f6f8",
    borderRadius: "6px",
    width: "100%",
    height: "100%",
    borderColor: state.isFocused ? "#f5f6f8" : "#f5f6f8",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "#1890ff" : "#f5f6f8",
      background: state.isFocused ? "#ffffff" : "#f5f6f8",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ display: "none" }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "6px",
  }),
  menuList: (base: any, state: { isFocused: any }) => ({
    ...base,
    padding: 0,
    color: "#000",
  }),
  option: (base: any, state: { isSelected: any; }) => ({
    ...base,
    // color: state.isSelected ? "yellow" : "black",
    // backgroundColor: state.isSelected ? "green" : "white",
  }),
};