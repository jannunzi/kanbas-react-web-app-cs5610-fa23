import ModuleList from "../Modules/ModuleList";


function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="col-2">
            <h2>Status</h2>
        </div>
    </div>
  );
}
export default Home;