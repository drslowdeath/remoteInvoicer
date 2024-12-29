 <div
        :class="{'w-72': sideBar, 'w-16': !sideBar}"
        class="h-screen bg-vlp transition-all duration-500 dark:bg-vdp"
        x-ref="mainSidebar"
        x-transition:enter="transition-all ease-in-out duration-500"
        x-transition:enter-start="w-16"
        x-transition:enter-end="w-72"
        x-transition:leave="transition-all ease-in-out duration-500"
        x-transition:leave-start="w-72"
        x-transition:leave-end="w-16">
        <div class="grid h-full grid-cols-1 grid-rows-3 items-center gap-20">
          <!-- MARK:ROW-1-ContentButtons -->
          <div class="mt-4 grid h-full w-full grid-cols-1 grid-rows-4 place-items-center items-center">
            <!-- CLIENTS -->
            <button
              @click="tabButtonClicked('clients')"
              :class="{ 'tab-button-active': tabContentActive('clients') }"
              class="tab-button flex items-center">
              <div x-show="sideBar" class="flex items-center p-2">
                <object data-feather="users" class="mr-1.5 w-4"></object>
                <span>Clients</span>
              </div>
              <div x-show="!sideBar" class="p-2">
                <object data-feather="users"></object>
              </div>
            </button>
            <!-- STYLES -->
            <button
              @click="tabButtonClicked('styles')"
              :class="{ 'tab-button-active': tabContentActive('styles') }"
              class="tab-button flex items-center">
              <div x-show="sideBar" class="flex items-center p-2">
                <object data-feather="package" class="mr-1.5 w-4"></object>

                <span>Items</span>
              </div>
              <div x-show="!sideBar" class="p-2">
                <object data-feather="package"></object>
              </div>
            </button>
            <!-- INVOICES -->
            <button
              @click="tabButtonClicked('invoices')"
              :class="{ 'tab-button-active': tabContentActive('invoices') }"
              class="tab-button flex items-center">
              <div x-show="sideBar" class="flex items-center p-2">
                <object data-feather="file-text" class="mr-1.5 w-4"></object>
                <span x-show="sideBar">Invoices</span>
              </div>
              <div x-show="!sideBar" class="p-2">
                <object data-feather="file-text"></object>
              </div>
            </button>
            <!-- EDITOR -->
            <button
              @click="tabButtonClicked('editor')"
              :class="{ 'tab-button-active': tabContentActive('editor') }"
              class="tab-button">
              <div x-show="sideBar" class="flex items-center p-2">
                <object data-feather="edit" class="mr-1.5 w-4"></object>
                <span x-show="sideBar">Editor</span>
              </div>
              <div x-show="!sideBar" class="p-2">
                <object data-feather="edit"></object>
              </div>
            </button>
          </div>

          <!-- MARK:ROW-2-Placeholder Item -->
          <div class="flex flex-col items-center justify-center"></div>

          <!-- MARK:ROW-3-DarkMode -->
          <div class="grid h-full grid-cols-1 grid-rows-2 place-items-center justify-center">
            <!-- DARKMODE -->
            <button @click="toggleTheme()" title="Dark mode toggle" class="tab-button p-2">
              <object x-show="mode === 'light'" data-feather="moon"></object>
              <object x-show="mode === 'dark'" data-feather="sun"></object>
            </button>
            <!-- SIDEBAR EXPANDED-->
            <button :title="sideBar ? 'Close Sidebar' : 'Open Sidebar'" @click="sideBarOpen()" class="tab-button p-2">
              <object data-feather="sidebar"></object>
            </button>
          </div>
        </div>
      </div>