import { Popover, PopoverGroup, PopoverButton } from '@headlessui/react'


function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                
                <PopoverGroup className="flex gap-x-12">
                    
                    {/*added buttons for the header to be able to navigate throughout the websites, will add functionality at a later date.*/}
                    <Popover className="relative">

                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 text-center">
                            About Me
                        </PopoverButton>

                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 text-center">
                            Projects
                        </PopoverButton>

                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 text-center">
                            Contact
                        </PopoverButton>

                    </Popover>

                </PopoverGroup>

            </nav>
        </header>
    )
}

export default Header;