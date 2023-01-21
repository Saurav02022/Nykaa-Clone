import AdminRoutes from "./routes/admin.routes";
import UserRoutes from "./routes/user.routes";
function App() {
  return (
    <div>
      <UserRoutes />
      <AdminRoutes />
    </div>
  );
}

export default App;
