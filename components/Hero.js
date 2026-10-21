'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const defaultSpecs = [
  { value: '±0.02', unit: ' mm', label: 'تلورانس تولید' },
  { value: '24', unit: '/7', label: 'خط تولید فعال' },
  { value: '100', unit: '%', label: 'تست کشش ایمنی' },
];

export default function Hero({ eyebrow, title, accent, lead, specs }) {
  const mountRef = useRef(null);

  const displayEyebrow = eyebrow || 'تولیدکننده قطعات تزریق پلاستیک';
  const displayTitle = title || 'تولید بست کمربندی ایمنی و قطعات تزریقی';
  const displayAccent = accent || 'خودرو';
  const displaySpecs = specs?.length ? specs : defaultSpecs;
  const displayLead =
    lead ||
    'از سال ۱۴۰۲ در تولید قطعات خودرویی و بست‌های پلاستیکی فعالیت می‌کنیم — با کنترل کیفیت در تمام مراحل، از ورود مواد اولیه تا تحویل نهایی.';

  useEffect(() => {
    const wrap = mountRef.current;
    if (!wrap) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    wrap.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x333d47, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.7);
    key.position.set(4, 5, 6);
    scene.add(key);
    const fillL = new THREE.DirectionalLight(0x3e6e8e, 0.9);
    fillL.position.set(-5, -1, 3);
    scene.add(fillL);
    const rim = new THREE.DirectionalLight(0xc79a4b, 1.15);
    rim.position.set(-3, 3, -5);
    scene.add(rim);

    const group = new THREE.Group();
    group.position.set(-3.6, -0.2, 0);
    scene.add(group);

    const mat = new THREE.MeshPhysicalMaterial({
      color: 0x8b96a1, metalness: 0.92, roughness: 0.16,
      clearcoat: 0.6, clearcoatRoughness: 0.25,
    });
    const gem = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, 0), mat);
    group.add(gem);

    const gauge = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.005, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0xc79a4b, transparent: true, opacity: 0.45 })
    );
    gauge.rotation.x = Math.PI / 2.15;
    group.add(gauge);

    const gauge2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.005, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0x3e6e8e, transparent: true, opacity: 0.3 })
    );
    gauge2.rotation.x = Math.PI / 1.7;
    gauge2.rotation.y = 0.3;
    group.add(gauge2);
    group.rotation.x = 0.2;

    let mx = 0, my = 0;
    const onMouseMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMouseMove);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      group.rotation.y += 0.0022;
      camera.position.x += (mx * 1.0 - camera.position.x) * 0.03;
      camera.position.y += (-my * 0.6 - camera.position.y) * 0.03;
      camera.lookAt(group.position);
      renderer.render(scene, camera);
    };
    animate();
    requestAnimationFrame(() => wrap.classList.add('loaded'));

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (wrap.contains(renderer.domElement)) wrap.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="hero">
      <div className="grid-bg"></div>
      <div ref={mountRef} id="hero-canvas"></div>
      <div className="hero-content">
        <div className="eyebrow">{displayEyebrow}</div>
        <h1>
          {displayTitle} <span className="accent">{displayAccent}</span>
        </h1>
        <p className="lead">{displayLead}</p>
        <div className="cta-row">
          <a href="/contact" className="btn-primary">تماس با ما</a>
        </div>
        {/* ارقام از پنل (تنظیمات سایت > سه رقم مشخصات) عوض می‌شن؛ مقدار پیش‌فرض نمونه‌ست */}
        <div className="specs">
          {displaySpecs.map((s, i) => (
            <div className="spec" key={i}>
              <div className="num">{s.value}{s.unit ? <span>{s.unit}</span> : null}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
