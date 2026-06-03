"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function FluidRibbon() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const ribbonRef = useRef<THREE.Mesh | null>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x080810, 1)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting setup for metallic effect
    const ambientLight = new THREE.AmbientLight(0x1a1a3e, 0.3)
    scene.add(ambientLight)

    // Main directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8)
    mainLight.position.set(5, 5, 5)
    scene.add(mainLight)

    // Gold accent light
    const goldLight = new THREE.PointLight(0xc4a35a, 1.5, 15)
    goldLight.position.set(-3, 2, 3)
    scene.add(goldLight)

    // Purple accent light
    const purpleLight = new THREE.PointLight(0x4a3a8a, 1.2, 15)
    purpleLight.position.set(3, -2, 2)
    scene.add(purpleLight)

    // Secondary blue light for depth
    const blueLight = new THREE.PointLight(0x1a1a6e, 1, 12)
    blueLight.position.set(0, 0, 4)
    scene.add(blueLight)

    // Create ribbon curve function
    const createRibbonCurve = (time: number) => {
      const points: THREE.Vector3[] = []
      const segments = 100

      for (let i = 0; i <= segments; i++) {
        const t = i / segments
        const angle = t * Math.PI * 4 + time * 0.3

        // Diagonal flow path with organic undulation
        const x = (t - 0.5) * 8 + Math.sin(angle * 0.5 + time * 0.2) * 0.8
        const y = (t - 0.5) * 6 + Math.cos(angle * 0.7 + time * 0.15) * 0.6
        const z = Math.sin(angle + time * 0.25) * 1.5 + Math.cos(t * Math.PI * 2 + time * 0.1) * 0.5

        points.push(new THREE.Vector3(x, y, z))
      }

      return new THREE.CatmullRomCurve3(points)
    }

    // Custom shader material for iridescent metallic effect
    const ribbonMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a1a6e,
      specular: 0xc4a35a,
      shininess: 100,
      emissive: 0x0a0a2e,
      emissiveIntensity: 0.2,
      side: THREE.DoubleSide,
    })

    // Create initial ribbon
    const initialCurve = createRibbonCurve(0)
    const tubeGeometry = new THREE.TubeGeometry(initialCurve, 200, 0.15, 32, false)
    const ribbon = new THREE.Mesh(tubeGeometry, ribbonMaterial)
    scene.add(ribbon)
    ribbonRef.current = ribbon

    // Animation
    let time = 0
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      time += 0.008 // Slow, smooth animation

      // Update ribbon geometry
      const newCurve = createRibbonCurve(time)
      const newGeometry = new THREE.TubeGeometry(newCurve, 200, 0.15, 32, false)
      
      if (ribbonRef.current) {
        ribbonRef.current.geometry.dispose()
        ribbonRef.current.geometry = newGeometry
      }

      // Subtle camera movement for depth
      camera.position.x = Math.sin(time * 0.1) * 0.3
      camera.position.y = Math.cos(time * 0.08) * 0.2
      camera.lookAt(0, 0, 0)

      // Animate lights for dynamic specular highlights
      goldLight.position.x = Math.sin(time * 0.3) * 4 - 2
      goldLight.position.y = Math.cos(time * 0.25) * 3
      
      purpleLight.position.x = Math.cos(time * 0.35) * 4 + 2
      purpleLight.position.y = Math.sin(time * 0.3) * 3

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return
      
      const width = window.innerWidth
      const height = window.innerHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameRef.current)
      
      if (ribbonRef.current) {
        ribbonRef.current.geometry.dispose()
        if (ribbonRef.current.material instanceof THREE.Material) {
          ribbonRef.current.material.dispose()
        }
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full"
      style={{ background: "#080810" }}
    />
  )
}
