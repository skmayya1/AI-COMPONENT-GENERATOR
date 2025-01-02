import { useContext, useState, ChangeEvent } from "react";
import { context } from "../../Context/DataContext";
import { IoMdSend } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Input: React.FC = () => {
    const { Data } = useContext(context);

    // States for dropdown selections
    const [selectedLanguage, setSelectedLanguage] = useState<string>("typescript");
    const [selectedFramework, setSelectedFramework] = useState<string>("vanilla");

    // State for input value
    const [inputValue, setInputValue] = useState<string>("");

    // States to handle dropdown open/close for rotation
    const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
    const [isFrameworkOpen, setIsFrameworkOpen] = useState<boolean>(false);

    // Handle dropdown change
    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    const handleFrameworkChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFramework(event.target.value);
    };

    // Handle input change
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    // Handle button click
    const handleSubmit = () => {
        console.log("Selected Language:", selectedLanguage);
        console.log("Selected Framework:", selectedFramework);
        console.log("Input Value:", inputValue);
        // Add your logic for handling the submit action
    };

    return (
        <div
            className={`h-full text-[#F2EFE9] border border-zinc-700 rounded-r-xl ${Data
                    ? "border-l-0 w-[40%]"
                    : "rounded-lg w-full transition-all ease-in-out duration-200"
                } font-mono`}
        >
            <div className="h-full w-full flex flex-col justify-between">
                <div className="flex px-3 py-1 gap-4">
                    {/* Language Selector */}
                    <div className="relative flex w-[8vw] gap-2">
                        <select
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="bg-transparent text-[#F2EFE9] outline-none border-none appearance-none pr-8"
                            style={{
                                color: "#F2EFE9",
                                backgroundColor: "transparent",
                                padding: "0.5rem",
                            }}
                        >
                            <option value="typescript" className="bg-[#333333] text-[#F2EFE9]">
                                Typescript
                            </option>
                            <option value="javascript" className="bg-[#444444] text-[#F2EFE9]">
                                Javascript
                            </option>
                        </select>
                        <IoIosArrowDown
                            className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-[#F2EFE9] transition-transform duration-200 ${isLanguageOpen ? "rotate-180" : ""
                                }`}
                        />
                    </div>

                    {/* Framework Selector */}
                    <div className="relative flex w-[8vw] gap-2">
                        <select
                            value={selectedFramework}
                            onChange={handleFrameworkChange}
                            onClick={() => setIsFrameworkOpen(!isFrameworkOpen)}
                            className="bg-transparent text-[#F2EFE9] outline-none border-none appearance-none pr-8"
                            style={{
                                color: "#F2EFE9",
                                backgroundColor: "transparent",
                                padding: "0.5rem",
                            }}
                        >
                            <option value="vanilla" className="bg-[#333333] text-[#F2EFE9]">
                                Vanilla CSS
                            </option>
                            <option value="tailwind" className="bg-[#444444] text-[#F2EFE9]">
                                Tailwind CSS
                            </option>
                        </select>
                        <IoIosArrowDown
                            className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-[#F2EFE9] transition-transform duration-200 ${isFrameworkOpen ? "rotate-180" : ""
                                }`}
                        />
                    </div>
                </div>

                {/* Preview or Message */}
                {Data ? null : (
                    <div className="h-full w-full items-center justify-center flex flex-col gap-2">
                        <h1 className="text-xl">Start building your new component</h1>
                    </div>
                )}

                {/* Input and Submit */}
                <div className="w-full h-20 flex items-center justify-between border-t px-2 border-zinc-700 rounded-lg">
                    <input
                        className="w-[80%] h-10 bg-transparent rounded-lg p-2 outline-none text-[#F2EFE9] font-semibold text-lg"
                        placeholder="Describe your component here..."
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button
                        onClick={handleSubmit}
                        className="p-1 rounded-full items-center justify-center h-10 w-10 flex"
                    >
                        <IoMdSend size={30} className="text-[#F2EFE9]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Input;
