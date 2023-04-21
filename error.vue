<script setup>
const router = useRouter();
watchEffect(() => {
  router.replace({ path: "/404" });
});
</script>
