<template>
    <div class="container">
      <router-view name="header"></router-view>
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </div>
</template>

<style>
body {
  padding-top: 20px;
  padding-bottom: 20px;
}

.fade-enter {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active {
  transition: all .3s ease;
}

.fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
  transition: all .3s ease;
}
</style>
