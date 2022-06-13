export const setScroll = (location,id) => {
    window.addEventListener("scroll", () => {
        // if (location.pathname === '/products/'+id) {
            if (window.innerWidth < 768) {
                if (document.documentElement.scrollTop <= 50) {
                    document.querySelector('.bottom-navbar').classList.add('!translate-y-[0]')
                }
                if (document.documentElement.scrollTop <= 900 && document.documentElement.scrollTop > 50) {
                    document.querySelector('.bottom-navbar').classList.remove('!translate-y-[0]')
                } 
                if (document.documentElement.scrollTop > 900) {
                    document.querySelector('.bottom-navbar').classList.add('!translate-y-[0]')
                }
            }
            else{
                window.addEventListener("scroll", () => {
                    // if (location.pathname === '/products/'+id) {
                        if (document.documentElement.scrollTop >= 600) {
                            document.querySelector('.bottom-navbar').classList.add('!translate-y-[0]')
                        } else {
                            document.querySelector('.bottom-navbar').classList.remove('!translate-y-[0]')
                        }
                    // }
                })
            }
        // }
    })
}