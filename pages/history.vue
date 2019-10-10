<template>
    <div class="light-app-body">
        <div class="content">
            <div class="container">
                <h5 class="b-7 mb-3 text-dark">Order History</h5>
                <!-- <div class="alert alert-info">
                    <strong>You have no order</strong>
                </div> -->
                        
                <ul class="list-group br-0 history-list">
                    <li class="list-group-item br-0 px-0 d-flex flex-column" data-toggle="modal" data-target="#myModal">
                        <div class="d-flex justify-content-between t-13">
                            <span class="text-grey-2">
                                July 2, 2019
                            </span>
                            <span><i class="fa fa-chevron-right text-grey-2"></i></span>
                        </div>
                        <div class="mt-2 d-flex justify-content-between">
                            <span>#87239300</span>
                            <span class="text-orange t-18">&#8358;3800.00</span>
                        </div>
                    </li>
                    <li class="list-group-item br-0 px-0 d-flex flex-column">
                        <div class="d-flex justify-content-between t-13">
                            <span class="text-grey-2">
                                July 2, 2019
                            </span>
                            <span><i class="fa fa-chevron-right text-grey-2"></i></span>
                        </div>
                        <div class="mt-2 d-flex justify-content-between">
                            <span>#87239300</span>
                            <span class="text-orange t-18">&#8358;3800.00</span>
                        </div>
                    </li>
                    <li class="list-group-item br-0 px-0 d-flex flex-column">
                        <div class="d-flex justify-content-between t-13">
                            <span class="text-grey-2">
                                July 2, 2019
                            </span>
                            <span><i class="fa fa-chevron-right text-grey-2"></i></span>
                        </div>
                        <div class="mt-2 d-flex justify-content-between">
                            <span>#87239300</span>
                            <span class="text-orange t-18">&#8358;3800.00</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="modal fade pr-0" id="myModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-dark-green text-white">
                        <h4 class="modal-title">#927997</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                
                    <div class="modal-body">
                        <div class="d-flex justify-content-between">
                            <span class="text-grey-2">DATE</span>
                            <span class="text-grey-2">TYPE</span>
                        </div>
                        <div class="d-flex justify-content-between mb-4">
                            <span class="b-6">DEC 20, 2019</span>
                            <span class="b-6">DELIVERY</span>
                        </div>
                        <div class="bg-light-green p-1 my-3 t-14">
                            <div class="d-flex justify-content-between">
                                <span class="">Lorem ipsum dolor sit amet consectetur.</span>
                                <span class="b-6">&#8358;6700.00</span>
                            </div>
                            <span>x3</span>
                        </div>
                        <div class="bg-light-green p-1 my-3 t-14">
                            <div class="d-flex justify-content-between">
                                <span class="">Lorem ipsum dolor sit amet consectetur.</span>
                                <span class="b-6">&#8358;6700.00</span>
                            </div>
                            <span>x3</span>
                        </div>
                        <div class="bg-light-green p-1 my-3 t-14">
                            <div class="d-flex justify-content-between">
                                <span class="">Lorem ipsum dolor sit amet consectetur.</span>
                                <span class="b-6">&#8358;6700.00</span>
                            </div>
                            <span>x3</span>
                        </div>

                        <hr class="my-2">
                        <div class="d-flex justify-content-between mt-3">
                            <span class="t-18 b-7">TOTAL</span>
                            <span class="t-18 b-7 text-orange">&#8358;6700.00</span>
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