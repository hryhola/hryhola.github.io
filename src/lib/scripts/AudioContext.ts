export class AudioContext {
    private audioContext?: InstanceType<typeof window.AudioContext>
    private gainNode?: GainNode
    readonly soundsMap = new Map<string, AudioBuffer>()

    initialize() {
        this.audioContext = new window.AudioContext()

        this.gainNode = this.audioContext.createGain()

        this.gainNode.gain.value = 0.05

        this.gainNode.connect(this.audioContext.destination)
    }

    async load(filePath: string) {
        if (!this.soundsMap.has(filePath)) {
            const audioBuffer = await fetch(`/sounds/${filePath}`)
                .then((response) => response.arrayBuffer())
                .then((arrayBuffer) =>
                    this.audioContext!.decodeAudioData(arrayBuffer)
                )
                .catch((error) => {
                    console.error(error)
                })

            if (audioBuffer) {
                this.soundsMap.set(filePath, audioBuffer)
            } else {
                console.error('Cannot load sound ' + filePath)
            }
        }
    }

    async play(fileName: string) {
        if (!this.audioContext) {
            console.error('this.audioContext is not defined!')

            return
        }

        if (!this.soundsMap.has(fileName)) {
            // Sound file not loaded, skip playing
            return
        }

        const audio = this.soundsMap.get(fileName)

        if (!audio) return

        const source = this.audioContext.createBufferSource()

        source.buffer = audio

        source.connect(this.gainNode!).connect(this.audioContext.destination)

        source.start()
    }
}

export const audioContext = new AudioContext()
