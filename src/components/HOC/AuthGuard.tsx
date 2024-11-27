import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const authGuard = (Component:React.FC)=>{
  const AuthGuard:React.FC = (props)=>{
    const router = useRouter()
    const {loggedInUser} = useSelector((state: RootState) => state.auth);


    /*
    Conditional logic goes here for authentication purposes. If user is authenticated,
     render the component. If user is not authenticated, redirect to login page
    */

     if (typeof window !== 'undefined' && !loggedInUser?.loginToken) {
      router.push('/sign-in');
      return null; // Avoid rendering protected component
    }

    return <Component {...props} />
  }
  return AuthGuard;
}
export default authGuard;