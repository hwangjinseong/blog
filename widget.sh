slice=$1

mkdir -p ./src/widgets/$slice
touch ./src/widgets/$slice/index.ts

cat <<EOF > ./src/widgets/$slice/index.ts
export * from "./ui";
EOF

mkdir -p ./src/widgets/$slice/ui
touch ./src/widgets/$slice/ui/index.ts

cat <<EOF > ./src/widgets/$slice/ui/index.ts
export { default as $slice } from "./$slice";
EOF

touch ./src/widgets/$slice/ui/$slice.tsx

cat <<EOF > ./src/widgets/$slice/ui/$slice.tsx
function $slice() {
  return (
    <></>
  );
}

export default $slice;
EOF