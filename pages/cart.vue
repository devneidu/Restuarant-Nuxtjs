<template>
    <div class="light-app-body">
        <div class="content">
            <div class="container">
                <h5 class="b-7 mb-3 text-dark">Shopping Cart</h5>
                <ul class="list-group br-0 history-list">
                    <li class="list-group-item br-0 px-0 d-flex flex-column " data-toggle="modal" data-target="#myModal">
                        <div class="d-flex justify-content-between mt-2">
                            <span class="b-6 t-14">
                                Lorem ipsum dolor sit amet consectetur.
                            </span>
                            <span class="t-13 text-grey-2">2 x &#8358;240.00</span>
                        </div>
                        <div class="my-2 d-flex justify-content-between">
                            <span>
                                <input type="text" name="" class="t-10 text-center" maxlength="2" size="4">
                                <span class="bg-orange text-white t-10 p-1"><i class="fa fa-trash text-dange"></i> Remove</span>
                            </span>
                            <span class="b-6 t-18">&#8358;3800.00</span>
                        </div>
                    </li>
                    <li class="list-group-item br-0 px-0 d-flex flex-column " data-toggle="modal" data-target="#myModal">
                        <div class="d-flex justify-content-between mt-2">
                            <span class="b-6 t-14">
                                Lorem ipsum dolor sit amet consectetur.
                            </span>
                            <span class="t-13 text-grey-2">2 x &#8358;240.00</span>
                        </div>
                        <div class="my-2 d-flex justify-content-between">
                            <span>
                                <input type="text" name="" class="t-10 text-center" maxlength="2" size="4">
                                <span class="bg-orange text-white t-10 p-1"><i class="fa fa-trash text-dange"></i> Remove</span>
                            </span>
                            <span class="b-6 t-18">&#8358;3800.00</span>
                        </div>
                    </li>
                    <li class="list-group-item br-0 px-0 d-flex flex-column " data-toggle="modal" data-target="#myModal">
                        <div class="d-flex justify-content-between mt-2">
                            <span class="b-6 t-14">
                                Lorem ipsum dolor sit amet consectetur.
                            </span>
                            <span class="t-13 text-grey-2">2 x &#8358;240.00</span>
                        </div>
                        <div class="my-2 d-flex justify-content-between">
                            <span>
                                <input type="text" name="" class="t-10 text-center" maxlength="2" size="4">
                                <span class="bg-orange text-white t-10 p-1"><i class="fa fa-trash text-dange"></i> Remove</span>
                            </span>
                            <span class="b-6 t-18">&#8358;3800.00</span>
                        </div>
                    </li>
                </ul>

                <h5 class="b-7 mb-3 mt-5 text-dark">Order Method</h5>
                <label class="radio-container">Delivery
                    <input type="radio" checked="checked" name="type">
                    <span class="radiomark"></span>
                </label>
                <label class="radio-container">Pick Up
                    <input type="radio" name="type">
                    <span class="radiomark"></span>
                </label>
                <label class="radio-container">Points
                    <input type="radio" name="type">
                    <span class="radiomark"></span>
                </label>
                <div class="mt-5 text-center t-22 b-7">
                    <h6 class="text-grey-2 b-7">TOTAL</h6>
                    <span>&#8358;5600.00</span>
                </div>
                <div class="mt-5">
                    <button class="b-7 btn btn-light br-0 btn-block border">CLEAR CART</button>
                    <nuxt-link to="/checkout" class="b-7 btn bg-dark-green br-0 btn-block text-white">CHECKOUT</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>