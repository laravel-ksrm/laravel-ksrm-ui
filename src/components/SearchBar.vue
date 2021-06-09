<template>
    <SearchBar
        placeholder="Find anything you want .."
        :search-results="searchedItems"
        v-model="searchText"
        @enter-press="onEnter"
        @on-typing="onTyping"
        @option-select="selected"
        :on-select-hide-list=true
        :disabled=false
        add-class="extra-class"
        :is-searching="searching"
        :search-not-found="'Not Found: '+searchText"
        icon-search="fa fa-search"
        icon-cancel="fa fa-times"
        icon-loader="fas fa-circle-notch fa-spin"
>
</SearchBar>
</template>