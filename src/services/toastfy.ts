import { toast } from "react-toastify";

export const notifySucess = (message: string) => {
  toast.success(`${message}`, {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const notifyError = (message: string) => {
  let msg;
  if (message === "Email already exists") {
    msg = "Email ja esta cadastrado";
  }
  if (message === "Invalid credentials") {
    msg = "Email ou Senha Incorretos";
  } else {
    msg = message;
  }
  toast.error(`${msg}`, {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
