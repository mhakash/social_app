import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";
import io from "socket.io-client";
import { useForm } from "react-hook-form";
//import useSWR from "swr";

const API_END = "http://localhost:5000";
let socket;

const fetcher = (url) => fetch(url).then((r) => r.json());

const Chat = () => {
  //const { data } = useSWR(`${API_END}/chat`);
  const { register, handleSubmit, watch, errors } = useForm();

  useEffect(() => {
    socket = io(API_END);
    socket.emit("join", { name: "akash" });
    const data = fetch(`${API_END}/api/chat`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (message) => {
      console.log(message);
    });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    socket.emit("message", data.input);
  };

  return (
    <div>
      <Paper>Nice</Paper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="input" placeholder="add text" ref={register} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Chat;
