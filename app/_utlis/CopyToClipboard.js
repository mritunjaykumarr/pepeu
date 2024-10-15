import toast from "react-hot-toast";

export const handleCopy = async (address) => {
  try {
    await navigator.clipboard.writeText(address); // Copy the address to clipboard
    toast.success("Address copied!"); // Show success message
  } catch (err) {
    toast.error("Failed to copy the address."); // Handle any copy errors
  }
};
