<template>
    <div class="light-app-body">
        <div class="content">
            <div class="container">
                <h5 class="b-7 mb-3 text-dark">Order Summary</h5>
            </div>
            <div class="px-0 bg-grey-1">
                <div class="container py-3 text-grey-2">
                    <span>Customer's Address</span>

                    <div class="mt-3">
                        <form>
                            <div class="form-group">
                                <label class="b-7">Name</label>
                                <input type="text" class="w-100 br-0 t-14 border p-1">
                            </div>
                            <div class="form-group">
                                <label class="b-7">Phone</label>
                                <input type="text" class="w-100 br-0 t-14 border p-1">
                            </div>
                            <div class="form-group">
                                <label class="b-7">Address</label>
                                <input type="text" class="w-100 br-0 t-14 border p-1">
                            </div>
                            <div class="form-group">
                                <label class="b-7">Additional Note</label>
                                <textarea cols="30" rows="2" class="w-100 br-0 border"></textarea>
                            </div>
                            <span>
                                <label class="switch mb-3">
                                    <input type="checkbox">
                                    <span class="slider round"></span> 
                                </label> Is someone else picking it up?
                            </span>
                            
                            <div class="form-group">
                                <label class="b-7">Picker's Name</label>
                                <input type="text" class="w-100 br-0 t-14 border p-1">
                            </div>
                            <div class="form-group">
                                <label class="b-7">Picker's Phone Number</label>
                                <input type="text" class="w-100 br-0 t-14 border p-1">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="container pt-3">
                <h5 class="b-7 mb-3 t-14 ">Order Details</h5>
                <div class="form-group">
                    <label class="b-6  text-grey-2">Pick Up Time</label>
                    <input type="text" class="w-100 br-0 t-14 border p-1">
                </div>
                <div class="form-group">
                    <label class="b-6  text-grey-2">Delivery Area</label>
                    <input type="text" class="w-100 br-0 t-14 border p-1">
                </div>
                <ul class="list-group br-0 history-list">
                    <li class="list-group-item br-0 px-0 d-flex flex-column border-top-0">
                        <div class="d-flex justify-content-between mt-2">
                            <span class="b-6 t-14">
                                Lorem ipsum dolor sit amet consectetur.
                            </span>
                            <span class="t-13 text-grey-2">2 x &#8358;240.00</span>
                        </div>
                        <div class="my-2 d-flex justify-content-end">
                            
                            <span class="text-orange b-6 t-18">&#8358;3800.00</span>
                        </div>
                    </li>
                    <li class="list-group-item br-0 px-0 d-flex flex-column">
                        <div class="d-flex justify-content-between mt-2">
                            <span class="b-6 t-14">
                                Lorem ipsum dolor sit amet consectetur.
                            </span>
                            <span class="t-13 text-grey-2">2 x &#8358;240.00</span>
                        </div>
                        <div class="my-2 d-flex justify-content-end">
                            
                            <span class="text-orange b-6 t-18">&#8358;3800.00</span>
                        </div>
                    </li>
                </ul>

                <div class="d-flex justify-content-between mt-2">
                    <span class="b-6 t-14">
                        SUBTOTAL
                    </span>
                    <span class="t-13 text-grey-2">2 x &#8358;2400.00</span>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <span class="b-6 t-14">
                        DELIVERY
                    </span>
                    <span class="t-13 text-grey-2">&#8358;240.00</span>
                </div>

                <div class="mt-5 text-center t-22 b-7">
                    <h6 class="text-grey-2 b-7">TOTAL</h6>
                    <span class="text-orange">&#8358;5600.00</span>
                </div>
                

                <div class="mt-5">
                    <nuxt-link to="/" class="b-7 btn btn-light br-0 btn-block border">GO BACK</nuxt-link>
                    <button class="b-7 btn bg-dark-green br-0 btn-block text-white">PROCEED TO PAY</button>
                </div>
            </div>
        </div>
    </div>        
</template>