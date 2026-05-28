import { Popover, PopoverGroup, PopoverButton } from '@headlessui/react'

function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                
                <PopoverGroup className="flex gap-x-12">
                    
                    {/*added buttons for the header to be able to navigate throughout the websites, will add functionality at a later date.*/}
                    <Popover className="relative">

                        <PopoverButton className="rounded bg-sky-600 px-4 py-2 text-sm text-white hover:bg-sky-500 active:bg-sky-700">
                            About Me
                        </PopoverButton>

                        <PopoverButton className="rounded bg-sky-600 px-4 py-2 text-sm text-white hover:bg-sky-500 active:bg-sky-700">
                            Projects
                        </PopoverButton>

                        <PopoverButton className="rounded bg-sky-600 px-4 py-2 text-sm text-white hover:bg-sky-500 active:bg-sky-700">
                            Contact
                        </PopoverButton>

                    </Popover>

                </PopoverGroup>

            </nav>
        </header>
    )
}

export default Header;