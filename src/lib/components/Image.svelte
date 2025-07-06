<script lang="ts">
    import { onMount } from "svelte";
  
    // Props definition
    export let hqSrc: string;
    export let lqSrc: string;
    export let alt: string;
    export let className: string;
    export let delay: number = 0; // Delay in ms before loading the HQ image
    export let onHqLoaded: (() => void) | undefined = undefined;
  
    let imageRef: HTMLImageElement | null = null;
    let src: string = lqSrc; // Start with the low-quality image
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Apply delay if specified
            setTimeout(() => {
              fetch(hqSrc)
                .then(res => res.blob())
                .then(blob => {
                  src = URL.createObjectURL(blob); // Set the high-quality image

                  if (onHqLoaded) {
                    onHqLoaded(); // Call the callback if provided
                  }
  
                  observer.disconnect(); // Stop observing after HQ image is loaded
                })
                .catch(() => {
                  // If high-quality image fails to load, keep using the low-quality image
                  // This provides graceful degradation for users
                });
            }, delay);
          }
        });
      });
  
      if (imageRef) {
        observer.observe(imageRef);
      }
  
      return () => {
        observer.disconnect();
      };
    });
</script>

  <!-- Render the image and bind it to the imageRef for observing -->
  <img src={src} class={className} alt={alt} bind:this={imageRef} />
  