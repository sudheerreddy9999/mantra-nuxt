<template>
    <main class="bg-slate-300 h-screen">
        <div class="flex gradient-background bg-gradient-background bg-180% animate-gradient-animation fixed w-full  bg-slate-700 h-16">
            <img class=" flex-none w-18 h-18 mx-10"  src="/learn.png"  alt="book"/>
            <h1 class=" flex flex-auto w-64 justify-center items-center text-xl text-white font-bold xl:text-3xl">Mantra NuxtJs Learnings</h1>
            <img  class=" flex-none w-18 h-18 mx-10 " width="68" height="48" src="/sudheer.png" alt="Sudheer"/>
          </div>
        <div class="flex pt-16 ">
            <div class="bg-slate-700 w-24">
                <nav class="flex flex-col ">
                    <NuxtLink to="/" class="m-5 mb-0 text-lg text-white">Home</NuxtLink>
                    <NuxtLink to="/main" class="m-5 mb-0 text-lg text-white">user</NuxtLink>
                    <NuxtLink to="/user" class="m-5 mb-0 text-lg text-white">Profile</NuxtLink>
                    <NuxtLink to="/single-user" class="m-5 mb-0 text-lg text-white"></NuxtLink>
                </nav>
            </div> 
            <div>
                <div class=" w-screen">
                    <slot />
                </div>
            </div>
        </div>


    </main>
</template>