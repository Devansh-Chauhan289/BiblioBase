export const Button = ({
    label = "Button",
    type = "Button",
    className = "",
    disabled = false
}) => {
    return(
        <>
        <button className={`cursor-pointer text-white bg-gradient-to-r from-[#800080] to-[#FF00FF] hover:from-[#DDA0DD] hover:to-[#FF00FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
        type={type} disabled = {disabled}
        >
            {label}
        </button>
        </>
    )
}