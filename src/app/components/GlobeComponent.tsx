"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import type { GlobeMethods } from "react-globe.gl";
import * as THREE from "three";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function MonoGlobe() {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);

    useEffect(() => {
        const globe = globeRef.current;
        if (!globe) return;

        const controls = globe.controls();
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;

        requestAnimationFrame(() => {
            globe.pointOfView(
                { lat: -6, lng: -43, altitude: 1.6 },
                2000
            );
        });
    }, []);

    return (
        <div className="bg-neutral-400 rounded-3xl">
            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl flex justify-center items-center">
                <div className="scale-125">
                    <Globe
                        ref={globeRef}
                        width={600}
                        height={600}
                        globeImageUrl="//unpkg.com/three-globe@2.18.3/example/img/earth-water.png"
                        bumpImageUrl={null}
                        backgroundColor="rgba(0,0,0,0)"
                        showAtmosphere={false}
                        globeMaterial={
                            new THREE.MeshPhongMaterial({
                                color: "#111",
                                shininess: 0,
                            })
                        }
                        pointsData={[{ lat: -6, lng: -43 }]}
                        pointColor={() => "#FF0000"}
                        pointAltitude={0.03}
                        pointRadius={0.7}
                    />
                </div>
            </div>
        </div>
    );
}
