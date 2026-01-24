<script lang="ts" setup>
interface Project {
  id: string
  slug: string
  body: string
  data: Record<string, any>
  collection: string
  render: any
}

withDefaults(defineProps<{
  list: Project[]
}>(), {
  list: () => [],
})

function getDate(date: string) {
  return new Date(date).toISOString()
}

function getHref(project: Project) {
  if (project.data.redirect)
    return project.data.redirect
  return '#'
}

function getTarget(project: Project) {
  if (project.data.redirect)
    return '_blank'
  return '_self'
}

function isSameCategory(a: string | undefined, b: string | undefined) {
  return a && b && a === b
}
</script>

<template>
  <ul sm:min-h-38 min-h-28 mb-18>
    <template v-if="!list || list.length === 0">
      <div my-12 opacity-50>
        nothing here yet.
      </div>
    </template>
    <li v-for="(project, index) in list" :key="project.data.title" mb-8>
      <div v-if="!isSameCategory(project.data.category, list[index - 1]?.data.category)" class="mb-3 mt-8">
        <h2 class="section-heading">
          {{ project.data.category }}
        </h2>
      </div>
      <a text-lg lh-tight nav-link flex="~ col gap-2" :aria-label="project.data.title" :target="getTarget(project)" :href="getHref(project)">
        <div flex="~ col md:row gap-2 md:items-center">
          <div flex="~ gap-2 items-center text-wrap">
            <span lh-normal class="text-gray-800 dark:text-gray-100">
              {{ project.data.title }}
            </span>
          </div>
          <div class="opacity-70 text-gray-600 dark:text-gray-300" text-sm ws-nowrap flex="~ gap-2 items-center">
            <i v-if="project.data.redirect" text-base i-ri-external-link-line />
            <time v-if="project.data.date" :datetime="getDate(project.data.date)">{{ project.data.date.split(',')[0] }}</time>
          </div>
        </div>
        <div class="opacity-70 text-gray-600 dark:text-gray-300" text-sm>{{ project.data.description }}</div>
      </a>
    </li>
  </ul>
</template>
