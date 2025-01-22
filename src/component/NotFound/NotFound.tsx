import NotFound404 from "@public/images/404.png";
export const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#fff]">
        <img src={NotFound404} alt=" Not Found" />
      </div>
    </>
  );
};
