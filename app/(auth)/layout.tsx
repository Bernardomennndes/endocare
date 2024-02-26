const AuthLayout = ( {children}: {children:React.ReactNode}) => {
    return(
        <div className=" flex items-center justify-center bg-cover bg-fixed h-full  relative bg-[url('/bg-default.svg')] text-white">
            {children}
        </div>
    )
}
export default AuthLayout;