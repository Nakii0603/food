import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export default function Login() {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center flex-col w-[1000px]">
        <h1 className="text-2xl">Нэвтрэх</h1>
        <div>
          <p>Имэйл</p>
          <input
            className="bg-[#F7F7F8] w-[400px] box-border p-1 border-2 border-grey "
            type="text"
            placeholder="Имэйл хаягаа оруулна уу"
          />
        </div>
        <div className="">
          <p>Нууц үг</p>
          <div className="border-2 border-grey bg-[#F7F7F8]">
            <input
              className="bg-[#F7F7F8] w-[400px] box-border p-1  "
              type="password"
              placeholder="Нууц үг"
            />
            <VisibilityOffIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
