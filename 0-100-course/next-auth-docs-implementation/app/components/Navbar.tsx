import { Button } from "./Button";

interface Navbar {
  user?: {
    name?: string | null;
    email?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Navbar = ({ user, onSignin, onSignout }: Navbar) => {
  return (
    <div className="flex justify-between border-b px-4">
      <div className="text-lg flex flex-col justify-center">The App</div>
      <div>
        {" "}
        {user?.name}
        {" "}
        {user?.email}
      </div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
