const UserMainAboutBio = ({ bio }) => {
    return (
        <div>
            <div className="mb-[18px] pb-12 border-b border-solid border-zinc-200">
                <div className="whitespace-pre-wrap break-words outline-none relative">
                    <div>
                        <p className="mt-[-0.66em] mb-[-0.46em] text-[20px] text-black font-normal break-words tracking-tight leading-8">
                            { bio }
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMainAboutBio;