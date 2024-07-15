export class SectionsScroller {
    private readonly minSection = 0
    private readonly maxSection = 5

    private currentSection = 0
    private isScrolling = false
    private onWheelHandlerDebounce?: number;

    private sectionsContainer?: HTMLDivElement;

    initialize() {
        this.sectionsContainer = document.querySelector('.sections') as HTMLDivElement;

        this.sectionsContainer.addEventListener('transitionend', () => {
            this.isScrolling = false
        })

        document.addEventListener('wheel', (event) => {
            console.log(this.isScrolling)

            if (event.deltaY === 0 || this.isScrolling) return
    
            if (typeof this.onWheelHandlerDebounce === 'number') {
                clearTimeout(this.onWheelHandlerDebounce)
            }
    
            this.onWheelHandlerDebounce = setTimeout(() => {
                const isScrollDown = event.deltaY > 0
                const isScrollUp = event.deltaY < 0
    
                const forbiddenScrollDown = isScrollDown && this.currentSection === this.maxSection
                const forbiddenScrollUp = isScrollUp && this.currentSection === this.minSection
    
                if (forbiddenScrollDown || forbiddenScrollUp) {
                    return
                }
    
                if (isScrollDown) {
                    this.currentSection++;
                } else {
                    this.currentSection--;
                }
    
                this.scrollToCurrentSection()
            }, 50)
        })
    }

    
    scrollToCurrentSection() {
        if (!this.sectionsContainer) {
            console.error('Sections container is not defined!')
            
            return false
        }

        if (this.currentSection > this.maxSection || this.currentSection < this.minSection) {
            console.error(`Got out of range section: ${this.currentSection}! min: ${this.minSection}, max: ${this.maxSection}`)
            
            return
        }

        this.sectionsContainer.setAttribute('style', 'top: -' + (this.currentSection * 100) + 'vh')

        this.isScrolling = true
    }

    scrollToSection(number: number) {
        if (number > this.maxSection || number < this.minSection) {
            console.error(`Got out of range section: ${number}! min: ${this.minSection}, max: ${this.maxSection}`)
            
            return
        }

        this.currentSection = number

        this.scrollToCurrentSection()
    }
}

export const scroller = new SectionsScroller()
