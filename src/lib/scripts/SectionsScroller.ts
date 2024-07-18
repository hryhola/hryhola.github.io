import { isContactsExpanded } from "./context"

export class SectionsScroller {
    readonly sections = [
        'contacts',
        'what-do-I-do',
        'skill-set',
        'experience',
        'education',
        'cv'
    ]

    readonly minSection = 0
    readonly maxSection = this.sections.length - 1

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

    scrollToHash() {
        const index = this.sections.indexOf(location.hash.substring(1))

        if (index !== -1) {
            this.scrollToSection(index)
        }
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

        const section = this.sections[this.currentSection]

        if (section !== 'contacts') {
            history.pushState({}, '', '#' + section)
        } else {
            history.pushState({}, document.title, window.location.pathname + window.location.search)
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
