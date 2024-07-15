const minSection = 0
const maxSection = 5
let currentSection = 0
let isScrolling = false


export const handleSectionsScroll = () => {
    const wrapper = document.querySelector('.sections') as HTMLDivElement;

    console.log(wrapper)

    let debounce: number;

    document.addEventListener('wheel', (event) => {
        if (event.deltaY === 0 || isScrolling) return

        if (typeof debounce === 'number') {
            clearTimeout(debounce)
        }

        debounce = setTimeout(() => {
            const isScrollDown = event.deltaY > 0
            const isScrollUp = event.deltaY < 0

            const cannotScrollDown = isScrollDown && currentSection === maxSection
            const cannotScrollUp = isScrollUp && currentSection === minSection

            if (cannotScrollDown || cannotScrollUp) {
                return
            }

            if (isScrollDown) {
                currentSection++;
            } else {
                currentSection--;
            }

            console.log(currentSection)

            // TODO isScrolling = true 

            wrapper.setAttribute('style', 'top: -' + (currentSection * 100) + 'vh')

            console.log(wrapper.style.top)
        }, 100)
    })
}
