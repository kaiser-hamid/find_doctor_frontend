import Select, { components } from "react-select";

export default function SelectWithSearch({
  name,
  value,
  options,
  onChange,
  placeholderText,
  hasSubLabel,
}) {
  const handleChangeInput = (ctx) => {
    onChange({ target: { name, value: ctx.value } });
  };

  const handleGetValue = () => {
    const valueForSet = options.find((item) => item.value === value);
    return valueForSet || { id: "", label: "", value: "" };
  };

  const Option = (props) =>
    !hasSubLabel ? (
      <components.Option {...props} />
    ) : (
      <components.Option {...props}>
        <p className="font-semibold">
          {props.data.label}
          <span className="text-bodydark block text-xs italic">
            -{props.data.sub}
          </span>
        </p>
      </components.Option>
    );

  /* return (
    <Select
      classNames={{
        indicatorsContainer: (state) => "py-1.5",
        input: (state) => "px-2",
        menu: (state) => "px-2",
        placeholder: (state) => "px-2",
        singleValue: (state) => "px-2",
      }}
      onChange={handleChangeInput}
      options={options}
      value={handleGetValue()}
      components={{ Option }}
      className="w-full"
    />
  );
   */
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused
        ? "1px solid rgb(100 116 139)"
        : "1px solid rgb(148 163 184)",
      boxShadow: "none",
      "&:hover": {
        border: state.isFocused
          ? "1px solid rgb(100 116 139)"
          : "1px solid rgb(148 163 184)",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgb(100 116 139)"
        : provided.backgroundColor,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgb(100 116 139)",
    }),
  };

  return (
    <Select
      onChange={handleChangeInput}
      options={options}
      value={handleGetValue()}
      components={{
        Option,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={customStyles}
      className="w-full"
      classNamePrefix="mc-select"
      placeholder="Type here.."
    />
  );
}
