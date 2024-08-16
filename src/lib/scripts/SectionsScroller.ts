import { pushState } from '$app/navigation'
import type { SwipedEvent } from "swiped-events"
import { debounce } from './helpers/function';

const widthPhoneBig = 575;

export class SectionsScroller {
    private sections = [
        'contacts',
        'what-do-I-do',
        'skill-set',
        'experience',
        'education',
        'cv'
    ]

    readonly minSection = 0
    get maxSection() {
        return this.sections.length - 1;
    }

    private currentSection = 0
    private isScrolling = false

    private containerElement?: HTMLDivElement;
    private sectionsElements?: HTMLDivElement[]

    private getNextSection(isScrollUp: boolean) {
        if (isScrollUp) {
            return this.currentSection - 1
        } else {
            return this.currentSection + 1;
        }
    }

    private isCurrentSectionScrolled(toUp: boolean) {
        if (!this.sectionsElements) {
            console.error('sectionsHTML is not defined!')
            
            return
        }

        const section = this.sectionsElements[this.currentSection]

        if (!section) {
            console.error('Cannot get current section!')

            return false
        }

        if (toUp) {
            return section.scrollTop === 0
        } else {
            return section.scrollHeight - section.scrollTop - section.clientHeight < 1
        }
    }

    private handleScroll(isScrollUp: boolean) {
        if (this.isScrolling || !this.isCurrentSectionScrolled(isScrollUp)) return

        const isScrollDown = !isScrollUp

        const forbiddenScrollDown = isScrollDown && this.currentSection === this.maxSection
        const forbiddenScrollUp = isScrollUp && this.currentSection === this.minSection

        if (forbiddenScrollDown || forbiddenScrollUp || !this.isCurrentSectionScrolled(isScrollUp)) {
            return
        }

        this.currentSection = this.getNextSection(isScrollUp)

        this.scrollToCurrentSection()
    }

    private setSections() {
        if (window.innerWidth <= widthPhoneBig) {
            this.sections = [
                'contacts',
                'what-do-I-do',
                'skill-set',
                'experience',
                'education',
                'certificates',
                'cv'
            ]
        } else {
            this.sections = [
                'contacts',
                'what-do-I-do',
                'skill-set',
                'experience',
                'education',
                'cv'
            ]
        }

        this.scrollToHash(false)
    }

    initialize() {
        this.containerElement = document.querySelector('.sections') as HTMLDivElement;
        this.sectionsElements = [...this.containerElement.querySelectorAll('section')] as HTMLDivElement[];

        this.containerElement.addEventListener('transitionend', () => {
            this.isScrolling = false
        })

        this.setSections();

        window.addEventListener('resize', debounce(this.setSections.bind(this)));

        document.addEventListener('wheel', (event) => {
            if (location.href.includes('about-education')) return

            if (event.deltaY === 0 || this.isScrolling) return
    
            this.handleScroll(event.deltaY < 0)
        })

        document.addEventListener('swiped', (e) => {
            if (location.href.includes('about-education')) return

            const event = e as SwipedEvent
            
            if (event.detail.dir === 'left' || event.detail.dir === 'right') return

            this.handleScroll(event.detail.dir === 'down')
        });
    }

    scrollToHash(noPushState = false) {
        let sectionName = location.hash.substring(1);

        if (sectionName === 'certificates' && !this.sections.includes(sectionName)) {
            sectionName = 'education'
        }

        const index = this.sections.indexOf(sectionName)

        this.scrollToSection(index !== -1 ? index : 0, noPushState)
    }

    scrollToCurrentSection(noPushState = false, noAnimationScroll = false) {
        if (!this.containerElement) {
            console.error('Sections container is not defined!')
            
            return false
        }

        if (this.currentSection > this.maxSection || this.currentSection < this.minSection) {
            console.error(`Got out of range section: ${this.currentSection}! min: ${this.minSection}, max: ${this.maxSection}`)
            
            return
        }

        const section = this.sections[this.currentSection]

        if (!noPushState) {
            if (section !== 'contacts') {
                pushState('#' + section, {})
            } else {
                pushState(window.location.pathname + window.location.search, {})
            }
        }

        if (!noAnimationScroll) {
            this.isScrolling = true
        }

        document.dispatchEvent(new Event('section-scroll'))

        this.containerElement.setAttribute('style', 'top: calc(-1 * var(--vh) * ' + (this.currentSection * 100) + ')')
    }

    scrollToSection(number: number, noPushState = false) {
        if (number > this.maxSection || number < this.minSection) {
            console.error(`Got out of range section: ${number}! min: ${this.minSection}, max: ${this.maxSection}`)
            
            return
        }

        const noAnimationScroll = number === this.currentSection;

        this.currentSection = number

        this.scrollToCurrentSection(noPushState, noAnimationScroll)
    }

    createFocusHandler(section: number) {
        return () => {
            if (this.currentSection !== section)
                this.scrollToSection(section)
        }
    }
}

export const scroller = new SectionsScroller()
