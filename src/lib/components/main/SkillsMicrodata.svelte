<script lang="ts">
    import skills from '../skill-set/skills.json'

    const skillNames = skills.filter(s => s.name).map(s => s.name).join(', ')
</script>
<span class="invisible-microdata" itemprop="skills">{skillNames}</span>
