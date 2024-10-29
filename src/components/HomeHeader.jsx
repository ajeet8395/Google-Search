import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
            <div className="flex gap-4">
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
                <a href="https://www.google.com/intl/en-IN/gmail/about/" target="_blank">Gmail</a>
                </span>
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
                <a href="https://www.google.com/photos/about/" target="_blank">Images</a>
                </span>
            </div>

            <ProfileIcon />
        </header>
    );
};

export default HomeHeader;
