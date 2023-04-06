<template>
  <div>
    <div class="">
      <h1 class="text-center font-semi-bold">All Lectures (50)</h1>
      <hr />
      <div class="lec mt-2">
        <ul>
          <li v-for="lesson in lessons" :key="lesson.title">
            <i class="fa-solid fa-circle-play text-green-400"></i>
            <span>{{ lesson.title }}</span>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'
const lessons = [
  {
    link: {
      url: 'https://res.cloudinary.com/dasn3rsmv/video/upload/v1680193226/course/lessons/reactivity.mp4',
      public_id: 'course/lessons/reactivity'
    },
    _id: '6425b6c84497490502787e1c',
    title: 'introduction',
    slug: 'introduction',
    createdAt: '2023-03-30T16:20:24.511Z',
    updatedAt: '2023-03-30T16:20:24.511Z',
    __v: 0
  },
  {
    link: {
      url: 'https://res.cloudinary.com/dasn3rsmv/video/upload/v1680193226/course/lessons/reactivity.mp4',
      public_id: 'course/lessons/reactivity'
    },
    _id: '6425b6c84497490502787e1c',
    title: 'reactivity',
    slug: 'reactivity',
    createdAt: '2023-03-30T16:20:24.511Z',
    updatedAt: '2023-03-30T16:20:24.511Z',
    __v: 0
  },
  {
    link: {
      url: 'https://res.cloudinary.com/dasn3rsmv/video/upload/v1680193226/course/lessons/reactivity.mp4',
      public_id: 'course/lessons/reactivity'
    },
    _id: '6425b6c84497490502787e1c',
    title: 'life cycle hooks',
    slug: 'reactivity',
    createdAt: '2023-03-30T16:20:24.511Z',
    updatedAt: '2023-03-30T16:20:24.511Z',
    __v: 0
  }
]

</script>

<style  scoped>
ul li {
  display: flex;

  gap: 10px;
  align-items: center;
  margin: 5px 0;
  text-transform: capitalize;
  font-family: jost;
  font-size: 16px;
  letter-spacing: 0.2px;
}
ul li i {
  color: red;
}
</style>