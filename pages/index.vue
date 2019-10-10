<template>
    <div   :class="[isLightTheme ? 'light-app-body' : 'dark-app-body']">
        <div class="content">
            <div class="container">
                <input type="text" class="form-control search-bar br-0 shadow-sm"  :class="[isLightTheme ? 'light-search-bar' : 'dark-search-bar']">
                <span class="search-icon">
                    <i class="fa fa-search"></i>
                </span>

                <!-- CATEGORIES --> 
                <ul class="categories-btn d-flex mt-4">
                    <li class="light-active-btn">All</li>
                    <li>Snacks</li>
                    <li>Vegetables</li>
                    <li>Drinks</li>
                    <li>Smoothies</li>
                    <li>Bread</li>
                </ul>

                <!-- FOOD SECTION -->
                <div class="row mt-3">
                    <div class="col-12 mb-4">
                        <div class="card shadow-md" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                            <img src="/a.jpg" alt="" class="img-fluid">
                            <div class="p-3">
                                    <div class="t-14 text-grey-2 item-title b-6">Lorem ipsum dolor sit amet consectetur.</div>
                                    <div class="text-orange t-16 b-6 mt-2">&#8358; 1700</div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span class="br-0 px-3 py-1 t-13 bg-dark-green text-white" data-toggle="modal" data-target="#myModal">Add to Cart</span>
                                        <i class="fa text-grey-2 t-20 fa-heart"></i>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="card shadow-md" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                            <img src="/b.jpg" alt="" class="img-fluid">
                            <div class="p-3">
                                    <div class="t-14 text-grey-2 item-title b-6">Lorem ipsum dolor sit amet consectetur.</div>
                                    <div class="text-orange t-16 b-6 mt-2">&#8358; 1700</div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span class="br-0 px-3 py-1 t-13 bg-dark-green text-white">Add to Cart</span>
                                        <i class="fa text-grey-2 t-20 fa-heart"></i>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="card shadow-md" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                            <img src="/c.jpg" alt="" class="img-fluid">
                            <div class="p-3">
                                    <div class="t-14 text-grey-2 item-title b-6">Lorem ipsum dolor sit amet consectetur.</div>
                                    <div class="text-orange t-16 b-6 mt-2">&#8358; 1700</div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span class="br-0 px-3 py-1 t-13 bg-dark-green text-white">Add to Cart</span>
                                        <i class="fa text-grey-2 t-20 fa-heart"></i>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="card shadow-md" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                            <img src="/d.jpg" alt="" class="img-fluid">
                            <div class="p-3">
                                    <div class="t-14 text-grey-2 item-title b-6">Lorem ipsum dolor sit amet consectetur.</div>
                                    <div class="text-orange t-16 b-6 mt-2">&#8358; 1700</div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span class="br-0 px-3 py-1 t-13 bg-dark-green text-white">Add to Cart</span>
                                        <i class="fa text-grey-2 t-20 fa-heart"></i>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="card shadow-md" :class="[isLightTheme ? 'light-app-card' : 'dark-app-card']">
                            <img src="/a.jpg" alt="" class="img-fluid">
                            <div class="p-3">
                                    <div class="t-14 text-grey-2 item-title b-6">Lorem ipsum dolor sit amet consectetur.</div>
                                    <div class="text-orange t-16 b-6 mt-2">&#8358; 1700</div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <span class="br-0 px-3 py-1 t-13 bg-dark-green text-white">Add to Cart</span>
                                        <i class="fa text-grey-2 t-20 fa-heart"></i>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>