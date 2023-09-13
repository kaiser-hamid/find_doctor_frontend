import Swal from "sweetalert2";

export const copyTextOnClicked = async (e) => {
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
