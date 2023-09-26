"use client";
import { FaCopy } from "react-icons/fa";
import Swal from "sweetalert2";

export default ({ text }) => {
  const handleCopy = async (e) => {
    const { text_to_be_copied } = e.currentTarget.dataset;
    await navigator.clipboard.writeText(text_to_be_copied);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Copied!",
      timer: 1000,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      data-text_to_be_copied={text}
      className="hover:text-primary transition duration-150 text-gray-500"
      title="Copy"
    >
      <FaCopy />
    </button>
  );
};
