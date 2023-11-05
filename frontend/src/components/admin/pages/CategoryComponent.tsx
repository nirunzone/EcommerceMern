import React from 'react'
import AdminFooter from '../layouts/AdminFooter'
import p1 from '../../../assets/images/p1.jpg'
import p2 from '../../../assets/images/p2.jpg'
import p3 from '../../../assets/images/p3.jpg'
import p4 from '../../../assets/images/p4.jpg'
import p5 from '../../../assets/images/p5.jpg'
import p6 from '../../../assets/images/p6.jpg'
import p7 from '../../../assets/images/p7.jpg'
import p8 from '../../../assets/images/p8.jpg'
import p9 from '../../../assets/images/p9.jpg'

function CategoryComponent() {
    return (
        <React.Fragment>
            CategoryComponent
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Categories</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Category</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <section className="section dashboard">
                    <div className="row">
                        {/* Left side columns */}
                        <div className="col-lg-8">
                            <div className="row">
                                {/* Sales Card */}
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="filter">
                                            <a className="icon" href="#" data-bs-toggle="dropdown">
                                                <i className="bi bi-three-dots" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Today
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        This Month
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        This Year
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Sales <span>| Today</span>
                                            </h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                    <span className="text-success small pt-1 fw-bold">
                                                        12%
                                                    </span>{" "}
                                                    <span className="text-muted small pt-2 ps-1">
                                                        increase
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div>
                <div className="home-util-ellipsis title home-fw-bold hugo3-fc-pc home-fz-large">
                    Just for you
                </div>
                <div className="just_for_you" id="hugo4waterfall__scroller">
                    <a
                        className="home-dot-element home-product"
                        data-spm={0}
                        href="watch"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="true"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src={p1}
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Portable hard drive HDD 2.5 inch Hard Drives USB3.0 Shockproof Full Encryption External Hard Disk"
                            >
                                <img
                                    className="bimg icon"
                                    // src={p2}
                                />
                                Portable hard drive HDD 2.5 inch Hard Drives USB3.0 Shockproof
                                Full Encryption External Hard Disk
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $1.90 - $59.90
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={1}
                        href="https://www.alibaba.com/product-detail/Good-Quality-And-Price-Seagate-Portable_62429822914.html?spm=a2700.product_home_l0.just_for_you.1"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="true"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src={p3}
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Good Quality And Price Seagate Portable Hard Drive 2.5inch 500GB  Mobile External HDD"
                            >
                                Good Quality And Price Seagate Portable Hard Drive 2.5inch 500GB
                                Mobile External HDD
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">$15.00</div>
                            </div>
                            <div className="moq fz-normal">MOQ: 20 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={2}
                        // href={p4}
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="true"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src={p4}
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="A5 CNC forging With Bigrrr Mosfet HK416D assault rifle  Electric Splatter Gel Ball Blaster With Water Beads gel bullet  toy gun"
                            >
                                <img
                                    className="bimg icon"
                                    // src={p4}
                                />
                                A5 CNC forging With Bigrrr Mosfet HK416D assault rifle Electric
                                Splatter Gel Ball Blaster With Water Beads gel bullet toy gun
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $810.80
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2.0 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={3}
                        // href={p6}
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="true"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src={p7}
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Custom Gift Box Middle East Turkey Gold Plated Porcelain Ceramic Coffee Tea Cup Set with Saucers"
                            >
                                Custom Gift Box Middle East Turkey Gold Plated Porcelain Ceramic
                                Coffee Tea Cup Set with Saucers
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $3.15 - $4.72
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 24 sets</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={4}
                        href={p8}
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="true"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src={p9}
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Motor Spare Parts 1.6 Tritec T16B3 Engine For Mini Cooper Chrysler PT Cruiser Chery A15 A11 Lifan 620 520"
                            >
                                <img
                                    className="bimg icon"
                                    src={p9}
                                />
                                Motor Spare Parts 1.6 Tritec T16B3 Engine For Mini Cooper
                                Chrysler PT Cruiser Chery A15 A11 Lifan 620 520
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $389.00 - $457.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 set</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={5}
                        href="https://www.alibaba.com/product-detail/Custom-Logo-Gift-Box-Set-Thermostatic_1600760610828.html?spm=a2700.product_home_l0.just_for_you.5"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src={p1}
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Custom Logo Gift Box Set Thermostatic CupPorcelai Vaccum Flask Ceramic Tea Coffee Mug for Mothers Day Valentine Wedding"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Custom Logo Gift Box Set Thermostatic CupPorcelai Vaccum Flask
                                Ceramic Tea Coffee Mug for Mothers Day Valentine Wedding
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $1.50 - $13.30
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 10.0 sets</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={6}
                        href="https://www.alibaba.com/product-detail/16-Pack-set-kitchen-Microwave-Refrigerator_1600543925862.html?spm=a2700.product_home_l0.just_for_you.6"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H44174e2aef0f4c67899217621781ef76u.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="16 Pack set kitchen Microwave  Refrigerator Plastic  with Easy Snap Lids Food Storage Container"
                            >
                                16 Pack set kitchen Microwave Refrigerator Plastic with Easy
                                Snap Lids Food Storage Container
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $0.10 - $0.60
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 16 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={7}
                        href="https://www.alibaba.com/product-detail/New-Engine-High-Quality-1-6L_1600782368201.html?spm=a2700.product_home_l0.just_for_you.7"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H9178f8ca4052456a9535f2f29d78f4aaP.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="New Engine High Quality 1.6L 1ZR-FE Dvvti For Toyota Auris Corolla Vios YARIS Engine Assembly ZRE151 ZRE120 ZRE140"
                            >
                                New Engine High Quality 1.6L 1ZR-FE Dvvti For Toyota Auris
                                Corolla Vios YARIS Engine Assembly ZRE151 ZRE120 ZRE140
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $1,070.00 - $1,100.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={8}
                        href="https://www.alibaba.com/product-detail/Low-cost-wholesale-2-5-inch_1600458054664.html?spm=a2700.product_home_l0.just_for_you.8"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src={p2}
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Low-cost wholesale 2.5 inch 3.0 USB 3.0 500GB 1TB 2TB External HDD Hard Portable Disk Drive External Hard Drive"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Low-cost wholesale 2.5 inch 3.0 USB 3.0 500GB 1TB 2TB External
                                HDD Hard Portable Disk Drive External Hard Drive
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $13.20 - $59.70
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1.0 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={9}
                        href="https://www.alibaba.com/product-detail/4TB-Hard-Disk-1tb-External-Portable_1600435653382.html?spm=a2700.product_home_l0.just_for_you.9"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/Hb49cb39a6be64d63977f81ca1bb85d31D.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="4TB Hard Disk 1tb External Portable SSD External Hard Drive 2TB 1 TB 500GB External Hard Disk"
                            >
                                4TB Hard Disk 1tb External Portable SSD External Hard Drive 2TB
                                1 TB 500GB External Hard Disk
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $9.50 - $20.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 20.0 sets</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={10}
                        href="https://www.alibaba.com/product-detail/2023-latest-WS-L9-2pc-watch_1600867420355.html?spm=a2700.product_home_l0.just_for_you.10"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H6f4266eaf42f4d5d8b033c6d7c431ef8D.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="2023 latest WS-L9 2pc watch 7in 2 straps smartwatch wireless connection call heart rate blood pressure sleep monitoring"
                            >
                                2023 latest WS-L9 2pc watch 7in 2 straps smartwatch wireless
                                connection call heart rate blood pressure sleep monitoring
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $9.95 - $20.85
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 10.0 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={11}
                        href="https://www.alibaba.com/product-detail/Hot-selling-24peice-Airtight-Pantry-Organization_1600839830109.html?spm=a2700.product_home_l0.just_for_you.11"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H2ba7602e7ed24223ba6745c9cb6cfd3bo.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Hot selling 24peice Airtight, Pantry Organization set Food Storage Containers for Kitchen cereal container with Lids/"
                            >
                                Hot selling 24peice Airtight, Pantry Organization set Food
                                Storage Containers for Kitchen cereal container with Lids/
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $0.10 - $16.20
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={12}
                        href="https://www.alibaba.com/product-detail/RGB-Aluminum-alloy-Portable-SSD-External_1600879750427.html?spm=a2700.product_home_l0.just_for_you.12"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H2de45673a37a437fbb88d9e828d93d70L.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="RGB Aluminum alloy Portable SSD External hard drive 120/128/240/256/480/512 GB hard disk drive SSD NVME/NGFF disque dur externe"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                RGB Aluminum alloy Portable SSD External hard drive
                                120/128/240/256/480/512 GB hard disk drive SSD NVME/NGFF disque
                                dur externe
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $14.19 - $59.99
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 10.0 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={13}
                        href="https://www.alibaba.com/product-detail/High-Quality-Gasoline-Engine-2TR-Fe_1600899967542.html?spm=a2700.product_home_l0.just_for_you.13"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H0a3e5bd131ee4c4bac523fbede7480a4P.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="High Quality Gasoline Engine 2TR Fe Motor 2TR Long Block For Toyota HiAce Hilux H200 2TR Engine"
                            >
                                High Quality Gasoline Engine 2TR Fe Motor 2TR Long Block For
                                Toyota HiAce Hilux H200 2TR Engine
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $1,850.00 - $2,000.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={14}
                        href="https://www.alibaba.com/product-detail/speaker-video-8-inch-bass-speaker_1600885541760.html?spm=a2700.product_home_l0.just_for_you.14"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/Ha0974843849141dab9f6aebb7a7b3eb4T.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="speaker video 8 inch bass speaker outdoor trolley blue tooth speaker with lcd screen"
                            >
                                speaker video 8 inch bass speaker outdoor trolley blue tooth
                                speaker with lcd screen
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $45.00 - $48.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2 boxes</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={15}
                        href="https://www.alibaba.com/product-detail/2022-New-Huawei-Mate-Xs-2_1600507299391.html?spm=a2700.product_home_l0.just_for_you.15"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H2fda28d3ed964018a79beb10624d2b085.png_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="2022 New Huawei Mate Xs 2 Folded Screen Mobile Phone Snapdragon 888 8GB 12GB RAM 256GB 512GB ROM 120Hz 50MP Camera 4600mAh NFC"
                            >
                                2022 New Huawei Mate Xs 2 Folded Screen Mobile Phone Snapdragon
                                888 8GB 12GB RAM 256GB 512GB ROM 120Hz 50MP Camera 4600mAh NFC
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $1,209.00 - $1,519.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={16}
                        href="https://www.alibaba.com/product-detail/Best-Selling-Double-Dry-Food-Dispenser_1600896262813.html?spm=a2700.product_home_l0.just_for_you.16"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H7edc97323b004636a8e71cde874e4561M.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Best-Selling Double Dry Food Dispenser with Dual Control Storing Cereal and Dry Foods in Clear Round Containers"
                            >
                                Best-Selling Double Dry Food Dispenser with Dual Control Storing
                                Cereal and Dry Foods in Clear Round Containers
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $2.20 - $5.32
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 24 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={17}
                        href="https://www.alibaba.com/product-detail/Custom-Embroidered-Screen-Puff-Printing-Plain_1600868581052.html?spm=a2700.product_home_l0.just_for_you.17"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                        data-spm-anchor-id="a2700.product_home_l0.0.0"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H754088251f7349209b3cf3eee927a4b7E.jpg_480x480.jpg"
                                data-spm-anchor-id="a2700.product_home_l0.17.i0.444f67af2bNExF"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Custom Embroidered Screen Puff Printing Plain Sweatshirts Sublimated Blank Custom Logo men's hoodies & sweatshirts"
                            >
                                Custom Embroidered Screen Puff Printing Plain Sweatshirts
                                Sublimated Blank Custom Logo men's hoodies &amp; sweatshirts
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $1.00 - $3.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={18}
                        href="https://www.alibaba.com/product-detail/Porcelain-Coffee-Cup-Gold-Electroplating-Mug_1600736739436.html?spm=a2700.product_home_l0.just_for_you.18"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H3ffb6f6abb31476c9efdb3ca01b2ba467.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Porcelain Coffee Cup Gold Electroplating Mug Decor Ceramic Teacup And Saucer Set"
                            >
                                Porcelain Coffee Cup Gold Electroplating Mug Decor Ceramic
                                Teacup And Saucer Set
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $4.00 - $6.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 24 sets</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={19}
                        href="https://www.alibaba.com/product-detail/Popular-Metal-Hard-Drives-500GB-1TB_1600831945373.html?spm=a2700.product_home_l0.just_for_you.19"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H893dafe6115b4defb97b41ba09e48ca0y.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Popular Metal  Hard Drives 500GB 1TB 2TB 4TB 8GB 10TB 20TB Portable SSD Hard Disk USB3.1 Type-c Solid State Disk Hard Drives"
                            >
                                Popular Metal Hard Drives 500GB 1TB 2TB 4TB 8GB 10TB 20TB
                                Portable SSD Hard Disk USB3.1 Type-c Solid State Disk Hard
                                Drives
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $4.90 - $19.90
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 10.0 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={20}
                        href="https://www.alibaba.com/product-detail/Magazine-Literature-Rack-multi-layer-book_1600272451313.html?spm=a2700.product_home_l0.just_for_you.20"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/Hba793dc317f145da9da9b2ad4d05908bB.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Magazine Literature Rack multi-layer book Brochure holder Catalog shelf"
                            >
                                Magazine Literature Rack multi-layer book Brochure holder
                                Catalog shelf
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">$39.98</div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={21}
                        href="https://www.alibaba.com/product-detail/Low-cost-wholesale-2-5-inch_1600278469102.html?spm=a2700.product_home_l0.just_for_you.21"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H071efad3224d495da1bddd0b48eae008h.png_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Low-cost wholesale 2.5 inch 3.0 USB 3.0 500GB 1TB 2TB External HDD Hard Portable Disk Drive External Hard Drive"
                            >
                                Low-cost wholesale 2.5 inch 3.0 USB 3.0 500GB 1TB 2TB External
                                HDD Hard Portable Disk Drive External Hard Drive
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $22.00 - $24.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 10 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={22}
                        href="https://www.alibaba.com/product-detail/Jinming-SLR-gel-Ball-Blasters-Toy_1600618086460.html?spm=a2700.product_home_l0.just_for_you.22"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/Hcb1404f673364fafa1b5d9fea06474eeV.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Jinming SLR gel Ball Blasters Toy Guns Gearbox Metal Accessories set for children  toy Cylinder Head nozzle ignition plug"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Jinming SLR gel Ball Blasters Toy Guns Gearbox Metal Accessories
                                set for children toy Cylinder Head nozzle ignition plug
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">$5.00</div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={23}
                        href="https://www.alibaba.com/product-detail/Brand-New-4cylinders-Motor-Engine-Assembly_1600433856084.html?spm=a2700.product_home_l0.just_for_you.23"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/U7c91c15e77f647c3866040b208ec3f62i.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Brand New 4cylinders Motor Engine Assembly 1zz for Toyota Corolla 1.8L"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Brand New 4cylinders Motor Engine Assembly 1zz for Toyota
                                Corolla 1.8L
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $100.00 - $500.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 5.0 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={24}
                        href="https://www.alibaba.com/product-detail/IN-STOCK-22inch-full-body-soft_1600726759382.html?spm=a2700.product_home_l0.just_for_you.24"
                        target="_blank"
                        data-spm-protocol="i"
                        data-appeared="false"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/He0190643581049249cce26043c4d0473a.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="IN STOCK 22inch  full body soft silicone reborn baby reborn baby dolls girl"
                            >
                                IN STOCK 22inch full body soft silicone reborn baby reborn baby
                                dolls girl
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $1.70 - $4.90
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 10 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={25}
                        href="https://www.alibaba.com/product-detail/Custom-Tracksuits-For-Women-Cotton-French_1600883465865.html?spm=a2700.product_home_l0.just_for_you.25"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H66fff1a6f4c64ccba654e2063b842b3cB.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Custom Tracksuits For Women Cotton French Terry Vintage Acid Wash Distressed Hoodie Sweatpants and Hoodie Jogger Set Women"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Custom Tracksuits For Women Cotton French Terry Vintage Acid
                                Wash Distressed Hoodie Sweatpants and Hoodie Jogger Set Women
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $18.88 - $25.88
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 100 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={26}
                        href="https://www.alibaba.com/product-detail/Cheap-Glueless-Afro-Kinky-Curly-Short_1600825916624.html?spm=a2700.product_home_l0.just_for_you.26"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H92dbf411e3c040cba307d333c9218859w.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Cheap Glueless Afro Kinky Curly Short Bob Wigs Human Hair Lace Front Wig For Black Women Vietnamese Raw Hair Hd Lace Frontal Wig"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Cheap Glueless Afro Kinky Curly Short Bob Wigs Human Hair Lace
                                Front Wig For Black Women Vietnamese Raw Hair Hd Lace Frontal
                                Wig
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $5.00 - $19.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1.0 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={27}
                        href="https://www.alibaba.com/product-detail/High-Quality-Wholesale-2-5-inch_1600643281446.html?spm=a2700.product_home_l0.just_for_you.27"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/He9bc0049905a45c7b13ac79e6ade6eafX.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="High Quality Wholesale 2.5 inch 3.0 USB 3.0 500GB 1TB 2TB 4TB External HDD Hard Portable Disk Drive External Hard Drive"
                            >
                                High Quality Wholesale 2.5 inch 3.0 USB 3.0 500GB 1TB 2TB 4TB
                                External HDD Hard Portable Disk Drive External Hard Drive
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $9.90 - $15.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 5 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={28}
                        href={p6}
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H4f3d238536b6426aa4a34ec3e32c3e0a1.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Popular product,   External HDD Hard Portable Disk Drive External Hard Drive 500gb 1tb 2tb 4tb hdd"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Popular product, External HDD Hard Portable Disk Drive External
                                Hard Drive 500gb 1tb 2tb 4tb hdd
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $12.50 - $72.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1.0 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={29}
                        href="https://www.alibaba.com/product-detail/OEM-256GB-512GB-1TB-2TB-Portable_1600739838124.html?spm=a2700.product_home_l0.just_for_you.29"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/Hbb567e0699ea4ca08b89c61de5dcba0ak.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="OEM 256GB 512GB 1TB 2TB Portable SSD USB3.1 Type-C External Hard Disk PSSD 1TB 2TB External SSD build in ssd sata support OEM"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                OEM 256GB 512GB 1TB 2TB Portable SSD USB3.1 Type-C External Hard
                                Disk PSSD 1TB 2TB External SSD build in ssd sata support OEM
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $26.90 - $29.90
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={30}
                        href="https://www.alibaba.com/product-detail/Original-Vivo-X90-Pro-X90-Pro_1600693377539.html?spm=a2700.product_home_l0.just_for_you.30"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H84ba5643dd5446109e45d9a88a8e3a31K.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title='Original Vivo X90 Pro + X90 Pro Plus 5G Smart Phone 6.78"  3200x1440 120Hz Qualcomm SD 8 Gen2 Android 13 4700mAh 80W NFC'
                            >
                                Original Vivo X90 Pro + X90 Pro Plus 5G Smart Phone 6.78"
                                3200x1440 120Hz Qualcomm SD 8 Gen2 Android 13 4700mAh 80W NFC
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $809.00 - $899.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={31}
                        href="https://www.alibaba.com/product-detail/Business-Laptop-15-6-Inch-i5_1600877130889.html?spm=a2700.product_home_l0.just_for_you.31"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H0e0bcd324ffa486a841a0272a37415e4E.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Business Laptop 15.6 Inch i5-520 4+128GB Cheap Laptops 6550B in China"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Business Laptop 15.6 Inch i5-520 4+128GB Cheap Laptops 6550B in
                                China
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $88.00 - $99.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 acre</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={32}
                        href="https://www.alibaba.com/product-detail/Portable-external-SSD-120GB128G-240GB-256GB_1600430539081.html?spm=a2700.product_home_l0.just_for_you.32"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H39283843ed6e48c9b7578ee3b29ea779H.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Portable external SSD 120GB128G 240GB 256GB 512GB 1TB solid state mobile hard drive box"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                Portable external SSD 120GB128G 240GB 256GB 512GB 1TB solid
                                state mobile hard drive box
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $3.50 - $18.50
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 10.0 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={33}
                        href="https://www.alibaba.com/product-detail/FULLY-ASSEMBLED-DeWalts-20v-Max-Lithium_1600816635199.html?spm=a2700.product_home_l0.just_for_you.33"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/A9e6179405e004f71883347a067b3aa79l.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="FULLY ASSEMBLED DeWalts 20v Max Lithium Ion Cordless Combos Kits15 Tool"
                            >
                                FULLY ASSEMBLED DeWalts 20v Max Lithium Ion Cordless Combos
                                Kits15 Tool
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $250.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2 units</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={34}
                        href="https://www.alibaba.com/product-detail/2023-2watchs-7-2-straps-WS_1600886550026.html?spm=a2700.product_home_l0.just_for_you.34"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/Hb747ef9f646349699803cc513f38c08e8.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="2023 2watchs 7+2 straps WS-L9 Android ISO Smart Watch Touch Screen Shenzhen Qianrun Smartwatch Fitness Top Watch Series8"
                            >
                                2023 2watchs 7+2 straps WS-L9 Android ISO Smart Watch Touch
                                Screen Shenzhen Qianrun Smartwatch Fitness Top Watch Series8
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $7.99 - $22.54
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={35}
                        href="https://www.alibaba.com/product-detail/External-SSD-1TB-Portable-SSD-250GB_1600465675416.html?spm=a2700.product_home_l0.just_for_you.35"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H7ca7157302474beea2f6e05b163deff52.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="External SSD 1TB Portable SSD 250GB Hard Drive 500GB HDD Type-C SSD Extern USB3.1 USB3.0 External Solid State Disk for Laptop PC"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                External SSD 1TB Portable SSD 250GB Hard Drive 500GB HDD Type-C
                                SSD Extern USB3.1 USB3.0 External Solid State Disk for Laptop PC
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $14.00 - $66.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1.0 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={36}
                        href="https://www.alibaba.com/product-detail/SanDisk-E30-Portable-SSD-1TB-480GB_1600306084101.html?spm=a2700.product_home_l0.just_for_you.36"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/Hf40f6669a7014850bc423cdfc07974ddy.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="SanDisk E30 Portable SSD 1TB 480GB 520M External Hard Drive SSD USB3.2 SSD Hard Drive 2T Solid State Disk for Laptop PC"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                SanDisk E30 Portable SSD 1TB 480GB 520M External Hard Drive SSD
                                USB3.2 SSD Hard Drive 2T Solid State Disk for Laptop PC
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $51.48 - $108.90
                                </div>
                                <div className="discount-price">
                                    <div className="line-price fz-normal">$78.00 - $165.00</div>
                                    <div className="discount fz-normal">-34%</div>
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={37}
                        href="https://www.alibaba.com/product-detail/Factory-Offer-for-Apples-iPhones-13_1600646939391.html?spm=a2700.product_home_l0.just_for_you.37"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/Ada50a32fab1a48c5ab4e6c1232c7819fb.jpeg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Factory Offer for Apples iPhones 13 Pro Max 1TB, Silver, Unlocked. Wholesale only In Good Quality"
                            >
                                Factory Offer for Apples iPhones 13 Pro Max 1TB, Silver,
                                Unlocked. Wholesale only In Good Quality
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $450.00 - $600.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 3.0 units</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={38}
                        href={p5}
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H857d6ce8b162435facca5d72975d4f01b.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="Factory direct sale for Toyota Camry Previa Alpha RAV4 ES240 2.4L 2.0L 1AZ-FE 2AZ-FE Engine"
                            >
                                Factory direct sale for Toyota Camry Previa Alpha RAV4 ES240
                                2.4L 2.0L 1AZ-FE 2AZ-FE Engine
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $1,200.00 - $1,300.00
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 1 piece</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                    <a
                        className="home-dot-element home-product"
                        data-spm={39}
                        href="https://www.alibaba.com/product-detail/10-in1-i20-Ultra-Max-Suit_1600891995949.html?spm=a2700.product_home_l0.just_for_you.39"
                        target="_blank"
                        data-spm-protocol="i"
                    >
                        <div className="img xz-img-wrapper">
                            <img
                                className="bimg offer-img"
                                src="//s.alicdn.com/@sc04/kf/H38e5e0878b42448ab322089d057bc859b.jpg_480x480.jpg"
                            />
                        </div>
                        <div className="product-fields">
                            <div
                                className="subject fz-normal home-util-ellipsis line2"
                                title="10 in1 i20 Ultra Max Suit Smartwatch 2.3 Inch HD Large Screen Wireless Charging True Buckle Screw 49MM Smart Watch TWS Earphones"
                            >
                                <img
                                    className="bimg icon"
                                    src="//s.alicdn.com/@img/imgextra/i2/O1CN01nSblek1FEtTZtWtdz_!!6000000000456-2-tps-113-48.png"
                                />
                                10 in1 i20 Ultra Max Suit Smartwatch 2.3 Inch HD Large Screen
                                Wireless Charging True Buckle Screw 49MM Smart Watch TWS
                                Earphones
                            </div>
                            <div className="price">
                                <div className="promotion home-util-ellipsis line2">
                                    $4.59 - $12.29
                                </div>
                            </div>
                            <div className="moq fz-normal">MOQ: 2 pieces</div>
                            <div className="delivery fz-normal" />
                        </div>
                    </a>
                </div>
            </div>
            <AdminFooter />
        </React.Fragment>
    );
}

export default CategoryComponent