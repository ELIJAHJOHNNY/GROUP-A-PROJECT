import UserPage from "../pages/UserPage";
import Homepage from "./Homepage";

const AllMovies = () => {
  return (
    <div>
      <Homepage />
      <div className="mt-30 py-10 bg-black z-50">
        <UserPage />
      </div>
    </div>
  );
};

export default AllMovies;
