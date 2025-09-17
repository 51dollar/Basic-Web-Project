import * as Yup from "yup";
import {useAuth} from "../../Context/useAuth.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

type LoginFormsInputs = {
    username: string;
    password: string;
};

const validation = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
    const {loginUser} = useAuth();
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormsInputs>({resolver: yupResolver(validation)});

    const handleLogin = (form: LoginFormsInputs) => {
        loginUser(form.username, form.password);
    };
    return (
        <section className="bg-gray-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow md:mb-20 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit(handleLogin)}
                        >
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register(("username"))}
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    placeholder="Username"
                                />
                                {errors.username ? <p className="text-red-500">{errors.username.message}</p> : ""}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    {...register(("password"))}
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                />
                                {errors.password ? <p className="text-red-500">{errors.password.message}</p> : ""}
                            </div>
                            <div className="flex items-center justify-between">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-gray-600 hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-600">
                                Don’t have an account yet?{" "}
                                <a
                                    href="#"
                                    className="font-medium text-gray-700 hover:underline"
                                >
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;