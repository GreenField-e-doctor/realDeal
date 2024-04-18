import React, { useRef,useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/scene.glb");
  const { actions } = useAnimations(animations, group);

  // Function to play the walking animation
  const playWalkingAnimation = () => {
    // Check if the 'CharacterArmature|Walk' animation exists
    if (actions['CharacterArmature|Walk']) {
      console.log('Playing Walking animation...');
      actions['CharacterArmature|Walk'].reset().play(); // Reset animation and then play
    } else {
      console.log("Walking animation not found.");
    }
  };
  console.log('Animations:', animations);
useEffect(()=>{
  playWalkingAnimation()
},[])
 
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh
            name="Suit_Legs"
            geometry={nodes.Suit_Legs.geometry}
            material={materials.Suit}
            skeleton={nodes.Suit_Legs.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <skinnedMesh
            name="Suit_Feet"
            geometry={nodes.Suit_Feet.geometry}
            material={materials.Black}
            skeleton={nodes.Suit_Feet.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group
            name="Suit_Body"
            position={[0, 0.007, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}>
            <skinnedMesh
              name="Suit_Body_1"
              geometry={nodes.Suit_Body_1.geometry}
              material={materials.Suit}
              skeleton={nodes.Suit_Body_1.skeleton}
            />
            <skinnedMesh
              name="Suit_Body_2"
              geometry={nodes.Suit_Body_2.geometry}
              material={materials.White}
              skeleton={nodes.Suit_Body_2.skeleton}
            />
            <skinnedMesh
              name="Suit_Body_3"
              geometry={nodes.Suit_Body_3.geometry}
              material={materials.Tie}
              skeleton={nodes.Suit_Body_3.skeleton}
            />
            <skinnedMesh
              name="Suit_Body_4"
              geometry={nodes.Suit_Body_4.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Body_4.skeleton}
            />
          </group>
          <group name="Suit_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Suit_Head_1"
              geometry={nodes.Suit_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Head_1.skeleton}
            />
            <skinnedMesh
              name="Suit_Head_2"
              geometry={nodes.Suit_Head_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Suit_Head_2.skeleton}
            />
            <skinnedMesh
              name="Suit_Head_3"
              geometry={nodes.Suit_Head_3.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Suit_Head_3.skeleton}
            />
            <skinnedMesh
              name="Suit_Head_4"
              geometry={nodes.Suit_Head_4.geometry}
              material={materials.Eye}
              skeleton={nodes.Suit_Head_4.skeleton}
            />
          </group>
        </group>
      </group>
      {/* Render animations */}
      {animations.map((clip, index) => (
        <primitive key={index} object={clip} />
      ))}
    </group>
  );
}

useGLTF.preload('/Business Man.glb');
